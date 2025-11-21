import React from 'react';

export interface Qualification {
  id: string;
  saqaId: string;
  title: string;
  nqfLevel: number;
  description: string;
  category: 'Legacy SAQA' | 'QCTO Occupational';
}

export interface Service {
  id: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  subLabel?: string | string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}