function* geradora5(){
    yield function(){
        console.log('Vim do vield1')
    }

    yield function(){
        console.log('Vim do vield2')
    }

    yield function(){
        console.log('Vim do vield3')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value

func1()
func2()
func3()