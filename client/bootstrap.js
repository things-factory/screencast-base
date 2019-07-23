import { store } from '@things-factory/shell'
import screencast from './reducers/screencast'

export default function bootstrap() {
  store.addReducers({
    screencast
  })
}
