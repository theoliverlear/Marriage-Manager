export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}
export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}
export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}

const imageAssetPath: string = 'assets/images/';
const logoImageAssetPath: string = imageAssetPath + 'logo/';
const iconImageAssetPath: string = imageAssetPath + 'icon/';

export const logoTransparentImageAsset: ImageAsset = {
    src: getLogoImagePath('logo_cropped_transparent.png'),
    alt: 'Paycheck to Paycheck Logo'
};
export const confirmIconImageAsset: ImageAsset = {
    src: getIconImagePath('confirm_icon.svg'),
    alt: 'Confirm Icon'
};
export const pendingIconImageAsset: ImageAsset = {
    src: getIconImagePath('pending_icon.svg'),
    alt: 'Pending Icon'
};
export const cancelIconImageAsset: ImageAsset = {
    src: getIconImagePath('cancel_icon.png'),
    alt: 'Cancel Icon'
};