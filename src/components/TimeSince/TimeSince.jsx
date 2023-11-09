import {useTranslation} from "react-i18next";

export function timeSince(date) {
    const now = new Date();
    const parsedDate = new Date(date);
    const seconds = Math.floor((now - parsedDate) / 1000);
    const { t } = useTranslation()
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " " + t('yearsAgo');
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " " + t('monthsAgo');
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " " + t('daysAgo');
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " " + t('hoursAgo');
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " " + t('minutesAgo');
    }

    return Math.floor(seconds) + " " + t('secondsAgo');
}
