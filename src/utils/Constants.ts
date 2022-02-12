import type { ToastDefaults } from "../types/utils";

export abstract class indexConstants {
    static readonly TOAST_DEFAULTS: ToastDefaults = {
        theme: "light",
        placement: "top-right"
    };
};