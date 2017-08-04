export module UtilsComponent {
    export function isNullOrEmpty(value) {
        return value == null || value == undefined || value.trim() == "";
    }
}