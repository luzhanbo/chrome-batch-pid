const sleep = (m)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },m*1000)
    })
}

//创建推广位
const createAdzones = (total)=>{
    const t = setInterval(async ()=>{
        const input = document.getElementById('J_originUrl')
        if(input){
            clearInterval(t)
            input.value = 'http://aaa'
    
            for(let i=1;i<=total;i++){
                await sleep(1)
                document.getElementsByClassName('btn btn-size25 btn-blue')[0].click()
                await sleep(2)
                document.getElementById('J_newzone_radio').click()
                await sleep(1)
                document.getElementById('J_new_zone').value = '推广位' + (i)
                await sleep(1)
                document.getElementsByClassName('btn btn-size28 mr10')[0].click()
                await sleep(3)
            }
        }
    },500)
}

createAdzones(190)