async function sendSuccessResponse( res ,message, data = []) {
    return res.status(200).json({
        status: true,
        message: message,
        data: data,
    });
}

async function sendServerErrorResponse(res) {
    return res.status(500).json({
        status: false,
        message: 'Something went wrong'
    });
}

async function sendUnprocessableDataResponse(res, message) {
    return res.status(422).json({
        status: false,
        message: message
    });
}
const responses = {sendServerErrorResponse, sendSuccessResponse, sendUnprocessableDataResponse}

export default responses;