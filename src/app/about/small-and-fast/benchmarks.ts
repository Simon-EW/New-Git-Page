import type { BenchmarkResult } from '@/components/about/BenchmarkResults';

export const results: BenchmarkResult[]  = [
    {
        name: 'Commit Files (A)',
        git: 0.64,
        svn: 2.60,
        diff: 4,
    },
    {
        name: 'Commit Images (B)',
        git: 1.53,
        svn: 24.70,
        diff: 16,
    },
    {
        name: 'Diff Current	Diff',
        git: 0.25,
        svn: 1.09,
        diff: 4,
    },
    {
        name: 'Diff Recent	Diff',
        git: 0.25,
        svn: 3.99,
        diff: 16,
    },
    {
        name: 'Diff Tags',
        git: 1.17,
        svn: 83.57,
        diff: 71,
    },
    {
        name: 'Log (50)',
        git: 0.01,
        svn: 0.38,
        diff: 31,
    },
    {
        name: 'Log (All)',
        git: 0.52,
        svn: 169.20,
        diff: 325,
    },
    {
        name: 'Log (File)',
        git: 0.60,
        svn: 82.84,
        diff: 138,
    },
    {
        name: 'Update',
        git: 0.90,
        svn: 2.82,
        diff: 3,
    },
    {
        name: 'Blame',
        git: 1.91,
        svn: 3.04,
        diff: 1,
    },
]