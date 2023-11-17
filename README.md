# tiny frontend framework
it consist only of two functions , "h" that renders html , and "atom" which is a watchable variable. 

see the whole framework [file](https://github.com/babak-karimi-asl/tiny-frontend-framework/blob/main/tiny-frontend-framework.js) , it's only 60 lines of code.

# usage example
```html
<!-- include the file-->
<script src="./tiny-frontend-framework.js"/>

<!-- and use it-->
<script>
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
            css: 'hello',
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
</script>

```
# result
video
[tiny-frontend-framework.webm](https://github.com/babak-karimi-asl/tiny-frontend-framework/assets/31150843/88b5157d-cfce-4f37-8442-24c70e8bcbc3)
