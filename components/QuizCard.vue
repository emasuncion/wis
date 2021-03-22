<template>
  <v-container id="wis-quiz-container">
    <div id="wis-quiz-header" class="text-center">
      Open Quizzes
    </div>
    <v-row no-gutters>
      <v-col
        v-for="subject in subjects"
        :key="subject.name"
        cols="12"
        sm="4"
      >
        <v-card
          id="wis-quiz-card"
          class="mx-auto my-8"
          max-width="344"
        >
          <v-card-text>
            <div id="wis-quiz-name-quiz">
              {{ subject.quiz }}
            </div>
            <p id="wis-quiz-description" class="py-6">
              {{ subject.description }}
            </p>
          </v-card-text>
          <v-card-actions class="px-5">
            <span
              id="wis-quiz-subject"
              class="mr-auto"
            >
              {{ subject.name }}
            </span>
            <v-btn
              id="wis-quiz-start-button"
              class="ml-auto"
              text
            >
              Start quiz
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'quizCard',

  data () {
    return {
      subjects: [
        {
          name: 'IS 215',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Aenean ac augue dui. Nullam quis diam sit amet magna maximus elementum' +
            'volutpat eget purus.',
          quiz: 'Quiz 3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #wis-quiz {
    &-header {
      font-size: $title;
      font-weight: bold;
    }

    &-name-quiz {
      font-size: $subheader;
      font-weight: bold;
      text-decoration: underline;
    }

    &-description {
      font-size: $large-body;
    }
  }
</style>
