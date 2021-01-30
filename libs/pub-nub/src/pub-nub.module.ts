import { Module } from '@nestjs/common';
import { PubNubService } from './pub-nub.service';
import Pubnub from 'pubnub';

@Module({
  providers: [PubNubService],
  useFactory: async (options) => {
    return new Pubnub(options);
  },
  exports: [PubNubService],
  inject: [Pubnub.PubnubConfig]
})
export class PubNubModule extends Pubnub {

}
