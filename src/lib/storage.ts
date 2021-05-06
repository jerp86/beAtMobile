export interface UserProps {
  id: string;
  user: string;
  name: string;
}

export interface QuestionnaireEnvironmentProps {
  id: string;
  title: string;
  info?: string;
}

export interface QuestionnaireProps {
  id: string;
  title: string;
  userCreated: string;
  dateCreated: Date;
  environment: string;
  questionsId?: [string];
}

export interface QuestionProps {
  id: string;
  question: string;
}

export interface AnswerProps {
  id: string;
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
