
const is_valid = a => a !== undefined && a !== null

function h(options) {

    if (Array.isArray(options)) options = {}
    if (typeof (options) !== 'object') options = {}

    let element
    if (is_valid(options.id)) element = document.getElementById(options.id)
    if (!element) element = document.createElement(options.tag || 'div')

    if (is_valid(options.id)) element.id = options.id
    if (is_valid(options.css)) element.setAttribute('class', options.css)
    if (is_valid(options.style)) element.setAttribute('style', options.style)

    if (is_valid(options.textContent)) element.textContent = options.textContent
    if (is_valid(options.innerText)) element.innerText = options.innerText
    if (is_valid(options.innerHTML)) element.innerHTML = options.innerHTML
    if (is_valid(options.outerHTML)) element.outerHTML = options.outerHTML

    const ons = options.on
    if (typeof (ons) === 'object')
        Object.keys(ons).forEach(on_event => {
            element.addEventListener(on_event, options.on[on_event])
        })

    const children = options.children
    if (Array.isArray(children))
        children.map(ch => element.append(ch))

    return element
}


function atom(value) {
    return {
        value,
        watchers: [],
        get() { return this.value },
        set(v) { 
            const old_value = this.value
            this.value = v
            this.watchers.map(w=>w(v,old_value))
        },
        update(updater){
            if(typeof(updater)!=='function') return;
            this.set( updater(this.value) ) 
        },
        watch(watcher){
            if(typeof(watcher)!=='function') return ()=>{}
            this.watchers.push(watcher)
            return ()=>this.watchers=this.watchers.filter(w=>w!=watcher)
        },
    }
}
