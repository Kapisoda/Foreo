<template>
  <div class="sectionVue">
    <div class="row">
        <h2>Showing vue strength</h2>
    </div>
    <div class="row">
        <div class="col span-1-of-2">
            <div class="inputs">
                <p>Add contact</p>
                <div v-if="object.name=='' && error==true" class="danger">You'r name is misssing'</div>
                <input type="text" name="name" placeholder="Name"  v-model="object.name" />
                <div v-if="object.surname=='' && error==true" class="danger">You'r last name is misssing'</div>
                <input type="text" name="name" placeholder="Last name"  v-model="object.surname" />
                <div v-if="object.phoneNumber=='' && error==true" class="danger">You'r phone number is misssing'</div>
                <input type="text" name="name" placeholder="Phone number"  v-model="object.phoneNumber" />
                
                <button @click="addFriend" class="button">Add friend</button>
                <button @click="reset" class="button" style="float: right;">Reset</button>
            </div>
        </div>
        <div class="col span-1-of-2">
            <div class="inputs">
                <p>You can search contact by name, last name or phone number</p>
                <input type="text" name="name" placeholder="Search"  v-model="search"/>
            </div>
        </div>
    </div>
    <div class="row">
         <hr>
    </div>
    <div class="row">
        <h3>Contacts</h3>
    </div>
   <div class="row">
        <p>You can remove contats from list just by clicking on them. :)</p>
    </div>
    <div class="row"  >
      <div class="col span-1-of-5 friend-box" v-for="friend in searchContact" v-bind:key="friend.id">
        <div @click="removeFriend(friend.id)">
        <ul>
            <li><i class="ion-person icons-contact"></i>{{friend.name}} {{friend.surname}}</li>
            <li><i class="ion-android-call icons-contact"></i>{{friend.phoneNumber}}</li>
        </ul> 
        </div>  
        </div>
    </div>

  </div>
</template>
<script>
import filter from '../Filter.js'
export default {
  data(){
      return{
          object:{
              id: '',
              name: '',
              surname: '',
              phoneNumber: ''
          },
          arrayObj: [],
          idNumber: 0,
          search: '',
          error: false

      }
  },
  methods: {
      addFriend(){
          this.error = false;
          if(this.object.name=='' || this.object.surname=='' || this.object.phoneNumber==''){
              this.error = true;
          }else{
              console.log(this.arrayObj.length);
              if(this.arrayObj.length>0){
                this.idNumber=this.arrayObj[this.arrayObj.length-1].id+1;
                this.object.id = this.idNumber;
              }else{
                  this.idNumber = 0;
                  this.object.id = this.idNumber;
              }
          
         var obj = {
             id: this.idNumber,
             name: this.object.name,
             surname: this.object.surname,
             phoneNumber: this.object.phoneNumber,
         }
         this.arrayObj.push(obj);
         for(var index in this.object) { 
           this.object[index]=''; 
        }  
          }
      },
    removeFriend(id){
        var self = this;
        var position = 0;
        this.arrayObj.forEach(function(el){
            if(el.id==id){
                self.arrayObj.splice(position, 1);
            }
            position++;
        });
    },
    reset(){
        var fakeFriends=[
         {id: 1,
         name: 'Filip',
         surname: 'Filipović',
         phoneNumber: '0998266777'},
         {id: 2,
         name: 'Marko',
         surname: 'Ivanić',
         phoneNumber: '099882200'},
         {id: 3,
         name: 'Slavko',
         surname: 'Panjić',
         phoneNumber: '0996182323'},
         {id: 4,
         name: 'Andrija',
         surname: 'Slavkić',
         phoneNumber: '09912345678'},
         {id: 5,
         name: 'Ivan',
         surname: 'Kralj',
         phoneNumber: '09909876767'},
         {id: 6,
         name: 'Mislav',
         surname: 'Car',
         phoneNumber: '09988777777'}
     ];
     this.arrayObj=fakeFriends;
    }
  },
  computed:{
      searchContact(){
           return filter.foo(this.arrayObj, this.search);
      }
  },
  created(){
     this.reset();
  }
}
</script>

<style scoped>


.sectionVue{
    min-height: 100vh;
    padding-top: 40px;
}

.inputs input{
    display: block;
    text-align: center;
    height: 40px;
    margin-bottom: 25px;
    border: 1px solid rgba(104, 40, 96, 1);
    width: 100%;
}

.button {
    background-color: rgba(104, 40, 96, 1);
    display: inline-block;
    color: #00ffff;
    padding: 15px 32px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid rgba(104, 40, 96, 1);
}

.button:hover,
.button:active {
    background-color: rgba(104, 40, 96, 0.95);
    border: 1px solid #00ffff;
}

.friend-box{
    padding: 5px 10px;
    display: block;
    
    border: 1px solid #682860;
    cursor: pointer;
    margin: 0 1% 1% 0;
    transition: box-shadow 0.3s, border 0.3s;
}
.friend-box:hover,
.friend-box:active{
    box-shadow: 5px 5px 5px rgba(182, 162, 162, 0.74);
    border: 1px solid #00ffff;
}
.friend-box ul li{
    list-style: none;
}

.sectionVue p{
    text-align: center;
}
.icons-contact{
    margin-right: 10px;
    color:rgba(104, 40, 96, 1);
  }

  .danger{
      color: red;
      margin: 0;
      text-align: left;
      font-size: 100%;
  }
</style>




