import { ɵmarkDirty as markDirty } from "@angular/core";

export type StateHolder<T> = {
  value: T;
  setValue: (value: T) => void;
};

export function useState<T>(host: unknown, initialState: T): StateHolder<T> {
  const stateHolder = {
    value: initialState,
    setValue(this, value: T) {
      this.value = value;
      markDirty(host);
    }
  };
  return stateHolder;
}
