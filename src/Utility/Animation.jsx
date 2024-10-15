export const SlideUp = (delay) => {
    return {
        intitial: {
            y: 100,
            opcacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            },
        },
    };
};

export const SlideLeft = (delay) => {
    return {
        intitial: {
            x: 100,
            opacity: 0
        },
        animate: {
            x:0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            },
        },
    };
};

export const SlideRide = (delay) => {
    return {
        intitial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            },
        },
    };
};