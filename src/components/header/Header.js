import {ExcelComponents} from '@core/ExcelComponent';

export class Header extends ExcelComponents {
    static className = 'excel__header'
    toHTML() {
        return `
            <input type="text" class="input" value="Новая таблица" />
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                 <div class="button">
                    <i class="material-icons">exit_to_app</i>
                 </div>
            </div>
        `
    }
}