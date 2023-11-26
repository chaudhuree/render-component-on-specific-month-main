import BlackFriday from "./BlackFriday";
import MerryChristmas from "./MerryChristmas";
import StandardOffer from "./StandardOffer";

export default function SeasonalOffer() {
    const todayDate = new Date();
    const currentMonth = todayDate.getMonth() + 1;

    let OfferComponent;

    if (currentMonth === 11) {
        OfferComponent = BlackFriday;
    } else if (currentMonth === 12) {
        OfferComponent = MerryChristmas;
    } else {
        OfferComponent = StandardOffer;
    }

    return (
        <div>
            <OfferComponent />
        </div>
    )
}