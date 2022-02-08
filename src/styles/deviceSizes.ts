export type DeviceType = keyof typeof device;

export const device = {
  small: `(max-width: 600px)`,
  medium: `(max-width: 768px)`,
  large: `(max-width: 1235px)`,
};
