function classifyAdvance(intervals = [], intervalIndex = 0, stepIndex = 0) {
    const steps = intervals[intervalIndex]?.steps ?? [];
    const hasMoreSteps = stepIndex < (steps.length - 1);
    const hasMoreIntervals = intervalIndex < (intervals.length - 1);

    if(hasMoreSteps) {
        return 'step';
    }
    if(hasMoreIntervals) {
        return 'interval';
    }
    return 'workout';
}

export { classifyAdvance };
