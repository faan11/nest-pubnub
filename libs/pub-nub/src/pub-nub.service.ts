import { Injectable } from '@nestjs/common';
import PubNub from 'pubnub';

@Injectable()
export class PubNubService extends PubNub {
}
