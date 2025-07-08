// /composables/useSnackbar.js
export function useSnackbar() {
    return {
        add({ type, text }) {
            // 仮の表示：アラートで代替（本来は Vuetify の snackbar など）
            alert(`[${type.toUpperCase()}] ${text}`);
        }
    };
}
