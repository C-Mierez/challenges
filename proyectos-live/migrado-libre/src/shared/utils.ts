export function toLocalePrice(price: number, currency: string) {
    return price.toLocaleString('es-AR', { style: 'currency', currency });
};