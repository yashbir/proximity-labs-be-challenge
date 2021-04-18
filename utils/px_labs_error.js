class PxLabsError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode = () => {
        if (this instanceof BadRequest) {
            return 400;
        }
        if (this instanceof NotFound) {
            return 404;
        }
        return 500;
    };
}

class BadRequest extends PxLabsError {}
class NotFound extends PxLabsError {}

module.exports = {
    PxLabsError,
    BadRequest,
    NotFound,
};
