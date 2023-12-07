import React from "react";
import { ApiData } from "../../types/api";
import { State } from "../../types/api";

export const DataContext = React.createContext<{ data: ApiData | false, fetchData: Function, reconnect: Function }>(
    {
        data: false,
        fetchData: () => { return false; },
        reconnect: () => { return false; }
    }
);

export const NotificationsContext = React.createContext<{list: State[], notify: Function, remove: Function}>(
    {
        list: [], 
        notify: () => { return false; },
        remove: () => { return false; }
    }
);