// client makes request to the server 
//so this request came to our server
//so node js comprises of many which ,
//one of them is event queue
//all the request which came firstly came inside the event queue in the queue manner
//then one by one these request goes to event loop...event loop is the lop or machine which always
//have the watch on our event queue and take one by one all the request from the queue in FIFO manner
//as soon as event loop takes the request from event queue it check for 
//whether this is blocking or non blocking opearation
//if it is non blocking then it will process that request and give response to the user
//but if the request is blocking
//the it goes to thread-pool----thread pool i sthe pool of thread which is responsible for completing your blocking operations
//and as soon as thread completed the work it return the response and then it return sto client 
//so this is the whole architecture of Node js


//deafult thread pool size if 4
//max size goes to cpu core of your machine