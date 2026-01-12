import {StyledClock} from "./styled";
import {useCurrentDate} from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString("pl", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });

export const Clock = () => {

    const date = useCurrentDate();

    return (
            <StyledClock>
                Dzisiaj jest {formatDate(date)}
            </StyledClock>
    )
}