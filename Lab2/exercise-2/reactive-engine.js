// Exercise 2 - Phase 1: State Store Engine

const stateStore = [];
let cursor = 0;

export function resetCursor() {
    cursor = 0;
}

export function getStateSlot(initialValue) {
    const slot = cursor++;

    if (!(slot in stateStore)) {
        stateStore[slot] = initialValue;
    }

    return {
        slot,
        value: stateStore[slot]
    };
}

export function updateStateSlot(slot, nextValue) {
    if (!Number.isInteger(slot) || slot < 0 || slot >= stateStore.length) {
        throw new RangeError("Invalid state slot");
    }

    stateStore[slot] = nextValue;
}

export function getStateSnapshot() {
    return [...stateStore];
}