export interface UserProps {
  key: string;
  user: string;
  name: string;
}

export interface QuestionnaireEnvironmentProps {
  key: string;
  title: string;
  info?: string;
}

export interface QuestionnaireProps {
  key: string;
  title: string;
  userCreated: string;
  dateCreated: Date;
  environment: string;
  questionsId?: [string];
}

export interface QuestionProps {
  key: string;
  question: string;
}

export interface AnswerProps {
  key: string;
  questionId: string;
  userId: string;
  dateAnswer: Date;
  lat: number;
  lon: number;
  answer: string;
}

export interface StorageQuestionProps {
  [id: string]: {
    data: QuestionProps;
  };
}
