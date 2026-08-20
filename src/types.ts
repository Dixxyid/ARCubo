export type ActiveTab = 'space' | 'anatomy' | 'architecture' | 'gaming';

export type SpecsCategory = 'hardware' | 'software' | 'compatibility';

export interface PreOrderMessageSetter {
  (message: string): void;
}
