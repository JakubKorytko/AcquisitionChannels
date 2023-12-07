import { ApiData, CustomError } from "./api.d";

const url = `http://127.0.0.1:8000/channels`;

const handleError = (err: Error): CustomError => {
    return {
        type: 'error',
        code: Number(err.name),
        message: err.message
    };
};

const read = (limit: Number = 20, page: Number = 1): Promise<ApiData|CustomError> => {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(`${url}/read`);

        const params = new URLSearchParams({
            limit: limit.toString(),
            page: page.toString()
        });

        urlObj.search = params.toString();

        fetch(urlObj).then(
            (response) => {
                if (response.ok) {
                    return response;
                }
                const error = new Error(response.statusText);
                error.name = response.status.toString();
                throw error;
            }
        )
        .then((response) => response.json())
        .then((json) => {
            const data: ApiData = {...json, type: 'success'};
            resolve(data);
        })
        .catch((error) => {
            const err = handleError(error);
            resolve(err);
        });

        // if (!response.ok) throw new Error(response.statusText);

        // const json: ApiData = await response.json();
    });
}

export {
    read
}