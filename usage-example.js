
let count = atom(0)

document.body.append(
    h({
        tag: 'h1',
        id: 'count-label',
        textContent: count.get()
    }),
    h({
        tag: 'button',
        id: 'my-button',
        on: {
            click() {
                count.update(v=>v+1)
            }
        },
        css: 'text-center',
        style: 'color:red;',
        textContent: 'increase',
    })
)

count.watch(v=>{
    h({
        id: 'count-label',
        textContent: v,
    })
})
