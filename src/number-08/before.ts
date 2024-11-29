// Code Smell: Divergent Change | Before

export class Toaster {
  private get toastElement(): HTMLElement {
    return document.querySelector("#toast-container")!;
  }

  public showSuccess(message: string): void {
    this.toastElement.innerHTML = `Success: ${message};`;
    this.toastElement.dataset.type = "success";

    console.info(`[TOAST] ${message}`);
  }

  public showWarning(message: string): void {
    this.toastElement.innerHTML = `Warning: ${message};`;
    this.toastElement.dataset.type = "warning";

    console.warn(`[TOAST] ${message}`);
  }

  public showError(message: string): void {
    this.toastElement.innerHTML = `Error: ${message};`;
    this.toastElement.dataset.type = "error";

    console.error(`[TOAST] ${message}`);
  }
}
