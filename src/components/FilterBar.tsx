import React from 'react';
import { Search, Filter, ArrowUpDown, FileText, Download, CheckCircle, Music } from 'lucide-react';
import { SubjectType } from '../types/audio';

interface FilterBarProps {
  selectedSubject: string;
  onSelectSubject: (subject: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'serial-asc' | 'serial-desc' | 'duration-desc' | 'duration-asc';
  onSortChange: (sort: 'serial-asc' | 'serial-desc' | 'duration-desc' | 'duration-asc') => void;
  totalCount: number;
  filteredCount: number;
  uploadedCount: number;
  onExportAll: () => void;
}

const SUBJECTS: { label: string; value: string; countColor: string }[] = [
  { label: 'All Subjects', value: 'all', countColor: 'bg-slate-100 dark:bg-slate-800' },
  { label: 'Biology', value: 'Biology', countColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
  { label: 'Physics', value: 'Physics', countColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
  { label: 'Chemistry', value: 'Chemistry', countColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' },
  { label: 'Exam Strategy', value: 'Exam Strategy', countColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
  { label: 'Coaching & Routine', value: 'Coaching & Mentorship', countColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedSubject,
  onSelectSubject,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
  filteredCount,
  uploadedCount,
  onExportAll,
}) => {
  return (
    <div className="space-y-4">
      {/* Search and Sort row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search transcripts, topics (e.g. NCERT, dipole, AR, isomerism)..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort and Export */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={e => onSortChange(e.target.value as any)}
              className="bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="serial-asc" className="dark:bg-slate-800">Serial (01 → 21)</option>
              <option value="serial-desc" className="dark:bg-slate-800">Serial (21 → 01)</option>
              <option value="duration-desc" className="dark:bg-slate-800">Longest Duration</option>
              <option value="duration-asc" className="dark:bg-slate-800">Shortest Duration</option>
            </select>
          </div>

          <button
            onClick={onExportAll}
            title="Export all transcripts into consolidated document"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition"
          >
            <Download className="w-3.5 h-3.5 text-indigo-500" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {SUBJECTS.map(sub => {
          const isSelected = selectedSubject === sub.value;
          return (
            <button
              key={sub.value}
              onClick={() => onSelectSubject(sub.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-indigo-600 dark:border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {sub.label}
            </button>
          );
        })}

        <div className="ml-auto text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap pl-2">
          Showing <span className="font-bold text-slate-900 dark:text-white">{filteredCount}</span> of {totalCount} clips
          {uploadedCount > 0 && (
            <span className="ml-2 text-emerald-600 dark:text-emerald-400">
              ({uploadedCount} audio loaded)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
