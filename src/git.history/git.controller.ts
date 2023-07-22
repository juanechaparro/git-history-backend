import { Controller, Get } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Controller('git')
export class GitController {
  private readonly apiUrl =
    'https://api.github.com/repos/juanechaparro/git-history-front/commits';
  private readonly headers = {
    'User-Agent': 'nestjs-app',
  };

  @Get()
  async getCommitHistory(): Promise<any[]> {
    try {
      const response: AxiosResponse<any[]> = await axios.get(this.apiUrl, {
        headers: this.headers,
      });
      return response.data.map((commit) => ({
        sha: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: commit.commit.author.date,
      }));
    } catch (error) {
      throw new Error('No se pudo obtener el historial de commits.');
    }
  }
}
