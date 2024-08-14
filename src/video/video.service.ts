import { Injectable } from '@nestjs/common';

const allVideos = [
	{
		id: 1,
		name: 'tom-and-jerry',
		duration: '3 mins',
		title: 'Tom & Jerry',
	},
	{
		id: 2,
		name: 'soul',
		duration: '4 mins',
		title: 'Soul',
	},
	{
		id: 3,
		name: 'outside-the-wire',
		duration: '2 mins',
		title: 'Outside the wire',
	},
];

@Injectable()
export class VideoService {
	findAll() {
		return allVideos;
	}

	findOne(id: number) {
		const video = allVideos.find(video => video.id == id);
		if (video) {
			return video;
		} else {
			return `There is no video with id ${id}`;
		}
	}
}
