<script setup>
const firstPerson = {
  gender: 'female',
  firstname: 'Emily',
  lastname: 'Parker',
  age: 24,
  job: 'Teacher',
  hobbies: ['read books', 'go hiking'],
  pet: {
    name: 'Whiskers',
    age: 2,
    species: 'ferret',
  },
}

const secondPerson = {
  gender: 'male',
  firstname: 'Marcus',
  lastname: 'Bennett',
  age: 38,
  job: 'Architect',
  hobbies: ['watch bird', 'play chess'],
  pet: {
    name: 'Nala',
    age: 6,
    species: 'dog',
  },
}

const thirdPerson = {
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'Environmental scientist',
  hobbies: ['play guitar', 'bake cakes'],
  pet: {
    name: 'Paws',
    age: 3,
    species: 'cat',
  },
}

const fourthPerson = {
  gender: 'male',
  firstname: 'Oliver',
  lastname: 'Hughes',
  age: 56,
  job: 'Carpenter',
  hobbies: ['paint', 'ride horses'],
  pet: {
    name: 'Bubble',
    age: 4,
    species: 'snake',
  },
}
</script>
<template>
  <main>
    <h1>Description List</h1>
    <div>
      <section>
        <img src="./assets/img/emily-parker.jpg" alt="" />
        <div>
          <h2>{{ firstPerson.firstname }} {{ firstPerson.lastname }}</h2>
          <p>
            {{ firstPerson.gender === 'female' ? 'She' : 'He' }} is
            {{ firstPerson.age }} years old {{ firstPerson.job.toLowerCase() }}.
          </p>
          <p>
            Outside of work, {{ firstPerson.firstname }} likes to
            {{ firstPerson.hobbies[0] }} and {{ firstPerson.hobbies[1] }}.
          </p>
          <p>
            At home
            {{ firstPerson.gender === 'female' ? 'her' : 'his' }} lively
            companion is {{ firstPerson.pet.name }} a
            {{ firstPerson.pet.age }} years old {{ firstPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>
      <section>
        <img src="./assets/img/marcus-bennett.jpg" alt="" />
        <div>
          <h2>{{ secondPerson.firstname }} {{ secondPerson.lastname }}</h2>
          <p>
            {{ secondPerson.gender === 'female' ? 'She' : 'He' }} is
            {{ secondPerson.age }} years old
            {{ secondPerson.job.toLowerCase() }}.
          </p>
          <p>
            Outside of work, {{ secondPerson.firstname }} likes to
            {{ secondPerson.hobbies[0] }} and {{ secondPerson.hobbies[1] }}.
          </p>
          <p>
            At home
            {{ secondPerson.gender === 'female' ? 'her' : 'his' }} lively
            companion is {{ secondPerson.pet.name }} a
            {{ secondPerson.pet.age }} years old {{ secondPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>
      <section>
        <img src="./assets/img/sophia-rodriguez.jpg" alt="" />
        <div>
          <h2>{{ thirdPerson.firstname }} {{ thirdPerson.lastname }}</h2>
          <p>
            {{ thirdPerson.gender === 'female' ? 'She' : 'He' }} is
            {{ thirdPerson.age }} years old {{ thirdPerson.job.toLowerCase() }}.
          </p>
          <p>
            Outside of work, {{ thirdPerson.firstname }} likes to
            {{ thirdPerson.hobbies[0] }} and {{ thirdPerson.hobbies[1] }}.
          </p>
          <p>
            At home {{ thirdPerson.gender === 'female' ? 'her' : 'his' }} lively
            companion is {{ thirdPerson.pet.name }} a
            {{ thirdPerson.pet.age }} years old {{ thirdPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>
      <section>
        <img src="./assets/img/olivier-hughes.jpg" alt="" />
        <div>
          <h2>{{ fourthPerson.firstname }} {{ fourthPerson.lastname }}</h2>
          <p>
            {{ fourthPerson.gender === 'female' ? 'She' : 'He' }} is
            {{ fourthPerson.age }} years old
            {{ fourthPerson.job.toLowerCase() }}.
          </p>
          <p>
            Outside of work, {{ fourthPerson.firstname }} likes to
            {{ fourthPerson.hobbies[0] }} and {{ fourthPerson.hobbies[1] }}.
          </p>
          <p>
            At home
            {{ fourthPerson.gender === 'female' ? 'her' : 'his' }} lively
            companion is {{ fourthPerson.pet.name }} a
            {{ fourthPerson.pet.age }} years old {{ fourthPerson.pet.species }}.
          </p>
        </div>
        <font-awesome-icon :icon="['fas', 'heart']" />
      </section>
    </div>
  </main>
</template>

<style>
main {
  padding: 50px;
  background-color: var(--green);
  min-height: 100vh;
}

main > div {
  /* border: 1px solid red; */
  display: flex;
  gap: 10px;
}

section {
  /* border: 1px solid green; */
  width: calc((100% - 30px) / 4);
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-sizing: 0 0 7px grey;
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  margin-bottom: 20px;
  aspect-ratio: 16/10;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
}
p {
  line-height: 20px;
  margin-bottom: 5px;
}

svg {
  color: grey;
  align-self: flex-end;
  margin-top: 20px;
}

/* ---- MEDIA QUERIES ---- */

@media (max-width: 1250px) {
  main {
    /* background-color: lightblue; */
  }
  main > div {
    flex-wrap: wrap;
    justify-content: center;
  }
  section {
    width: 280px;
  }
}
</style>
