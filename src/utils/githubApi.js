
import { UI_MESSAGES, HTTP_STATUS } from "./config.js";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }

    if (res.status === HTTP_STATUS.notFound) {
        return Promise.reject({ type: "notFound", status: res.status });
    }

    if (res.status === HTTP_STATUS.unauthorized || res.status === HTTP_STATUS.forbidden) {

        return Promise.reject({ type: "restricted", status: res.status });
    }

    return Promise.reject({ type: "httpError", status: res.status });
}

export function fetchUserRepos(url) {
    return fetch(url)
        .then((res) => checkResponse(res))
        .catch((err) => {
            return Promise.reject(err);
        });
}

export function getUserFacingError(err) {
    if (!err || typeof err !== "object") {
        return UI_MESSAGES.unknownError;
    }

    if (err.type === "notFound") {
        return UI_MESSAGES.userNotFound;
    }

    if (err.type === "restricted") {
        return UI_MESSAGES.rateLimit;
    }

    return UI_MESSAGES.unknownError;
}

export function fetchLatestWorkflowRun(url) {
    return fetch(url)
        .then((res) => checkResponse(res))
        .catch((err) => Promise.reject(err));
}

export function mapRunToStatus(run) {
    if (!run) return "unknown";


    if (run.status === "in_progress" || run.status === "queued") return "yellow";

    if (run.status === "completed") {
        if (run.conclusion === "success") return "green";
        if (run.conclusion === "failure" || run.conclusion === "cancelled") return "red";
        return "unknown";
    }

    return "unknown";
}