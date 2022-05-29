export const getUserInfo = async () => {
    return new Promise<any>(resolve => {
        setTimeout(() => {
            resolve({
                name: '张三',
                age: 18,
            });
        }, 1000);
    })
}
