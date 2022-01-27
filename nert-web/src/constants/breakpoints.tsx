export const deviceSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
    desktopXL: '3000px'
}

export const deviceMin = {
    mobileS: `(min-width: ${deviceSize.mobileS})`,
    mobileM: `(min-width: ${deviceSize.mobileM})`,
    mobileL: `(min-width: ${deviceSize.mobileL})`,
    tablet: `(min-width: ${deviceSize.tablet})`,
    laptop: `(min-width: ${deviceSize.laptop})`,
    laptopL: `(min-width: ${deviceSize.laptopL})`,
    desktop: `(min-width: ${deviceSize.desktop})`,
    desktopL: `(min-width: ${deviceSize.desktop})`,
    desktopXL: `(min-width: ${deviceSize.desktopXL})`
};

export const deviceMax = {
    mobileS: `(max-width: ${deviceSize.mobileS})`,
    mobileM: `(max-width: ${deviceSize.mobileM})`,
    mobileL: `(max-width: ${deviceSize.mobileL})`,
    tablet: `(max-width: ${deviceSize.tablet})`,
    laptop: `(max-width: ${deviceSize.laptop})`,
    laptopL: `(max-width: ${deviceSize.laptopL})`,
    desktop: `(max-width: ${deviceSize.desktop})`,
    desktopL: `(max-width: ${deviceSize.desktop})`,
    desktopXL: `(max-width: ${deviceSize.desktopXL})`
};
