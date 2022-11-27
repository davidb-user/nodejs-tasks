export class ErrorHandler {
  static handleUhandledRejections() {
    process.on("unhandledRejection", (err) => {
      console.log(err);
      process.exit(1);
    });
  }
}
