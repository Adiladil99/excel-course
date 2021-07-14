import {DomListener} from '@core/DomListener';

export class ExcelComponents extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.store = options.store
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.unsubscribers = []

        this.prepare()
    }

    // Настраиваем наш компонент до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уводомляем слушателей про событий event 
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие emit
    $on(event, fn) {
        this.emitter.subscribe(event, fn)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    // Сюда приходит только изменение по тем полям, на которые мы подписались
    storeChanged() {}

    isWatching(key) {
        return this.subscribe.includes(key)
    }

    // Инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент и чистим слушателей
    destroy() {
        this.removeDOMListeners()       
        this.unsubscribers.forEach(unsub => unsub())
    }
}