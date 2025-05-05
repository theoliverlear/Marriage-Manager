export enum DropdownOption {
    PENDING = 'Pending',
    ACCEPTED = 'Accepted',
    DECLINED = 'Declined',
}
export namespace DropdownOption {
    export function getOptions(): DropdownOption[] {
        return [
            DropdownOption.PENDING,
            DropdownOption.ACCEPTED,
            DropdownOption.DECLINED,
        ];
    }
    export function from(value: string): DropdownOption {
        switch (value) {
            case DropdownOption.PENDING:
                return DropdownOption.PENDING;
            case DropdownOption.ACCEPTED:
                return DropdownOption.ACCEPTED;
            case DropdownOption.DECLINED:
                return DropdownOption.DECLINED;
            default:
                throw new Error(`Invalid value: ${value}`);
        }
    }
}