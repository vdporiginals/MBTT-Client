export interface AnswerQuestion {
  AnswerId: number;
  Title: string;
  Content: string;
  Type: number;
  Status: number;
  CreatedOn: string;
  CreatedBy: number;
}

export interface Question {
  QuestionId: number;
  Title: string;
  Content: string;
  Type: number;
  Status: number;
  CreatedOn: string;
  CreatedBy: number;
}

export interface Company {
  CompanyId: number;
  Name: string;
  TaxCode: string;
  Address: string;
}

export interface Product {
  ProductId: number;
  MediaURL: string;
  ProductCode: string;
  Name: string;
  Description: string;
  Source: string;
  Price: number;
  RatingNumber: number;
  RatingAVG: number;
  Type: number;
  Status: number;
}

export interface RatingProduct {
  ProductRatingId: number;
  RatingId: number;
  Value: number;
  Content: string;
  Type: number;
  Status: number;
  CreatedBy: number;
  CreatedOn: number;
}
