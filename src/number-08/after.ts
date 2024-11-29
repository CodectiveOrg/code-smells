// Code Smell: Divergent Change | After

export class Toaster {
  public static SUCCESS: Variant = {
    label: "Success",
    datasetType: "success",
    logMethod: console.info,
  };

  public static WARNING: Variant = {
    label: "Warning",
    datasetType: "warning",
    logMethod: console.warn,
  };

  public static ERROR: Variant = {
    label: "Error",
    datasetType: "error",
    logMethod: console.error,
  };

  private get toastElement(): HTMLElement {
    return document.querySelector("#toast-container")!;
  }

  public show(message: string, variant: Variant): void {
    this.toastElement.innerHTML = `${variant.label}: ${message};`;
    this.toastElement.dataset.type = variant.datasetType;

    variant.logMethod(`[TOAST] ${message}`);
  }
}

interface Variant {
  label: string;
  datasetType: string;
  logMethod: (message: string) => unknown;
}
