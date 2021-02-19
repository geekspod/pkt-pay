import { v4 } from 'uuid'
import { images } from '../assets/images'
import { IBillingId, IBillingType } from '../interfaces'


const types = [
    {
        uid: v4(),
        title: 'Electriciy',
        icon: images.six
    },
    {
        uid: v4(),
        title: 'Phone',
        icon: images.five
    },
    {
        uid: v4(),
        title: 'Water',
        icon: images.three
    },
    {
        uid: v4(),
        title: 'Cable',
        icon: images.four
    },
];

const ids = [1,1,1,1,1,1,1,1].map((v: any, index: number) => ({
    uid: v4(),
    title: `Issuer # ${index + 1}`,
    icon: images.two
}));
class CBilling {
    get Types (): Array<IBillingType> {
        return types;
    }

    get RecentTypes (): Array<IBillingType> {
        return types.slice(0, 3);
    }
    
    get IDs (): Array<IBillingId> {
        return ids;
    }
}

export const Billing = new CBilling();
console.log();
