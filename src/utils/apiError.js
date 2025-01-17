class apiError extends Error {
    constructor(
        statusCode,
        message = "Some thing went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode,
        this.message = message,
        this.errors = errors,
        this.data = null,
        this.success = false


        if (stack) {
            this.statck = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {apiError}