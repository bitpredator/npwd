import { atom } from 'recoil';
import { ResourceConfig } from '@typings/config';

export const phoneState = {
  visibility: atom<boolean>({
    key: 'phoneVisibility',
    default: import.meta.env.DEV ? true : false,
  }),
  resourceConfig: atom<ResourceConfig>({
    key: 'resourceConfig',
    default: null,
  }),
  phoneTime: atom<string>({
    key: 'phoneTime',
    default: null,
  }),
  isPhoneDisabled: atom<boolean>({
    key: 'isPhoneDisabled',
    default: false,
  }),
  playerSource: atom<number>({
    key: 'playerSource',
    default: 0,
  }),
  playerIdentifier: atom<string>({
    key: 'playerIdentifier',
    default: null,
  }),
  extApps: atom({
    key: 'phoneExtApps',
    default: [],
  }),
};
