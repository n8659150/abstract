<template>
	<div>


		<h3>5 Comments</h3>

		<!-- commentlist -->
		<ol class="commentlist">

			<li class="depth-1">

				<div class="avatar">
					<img width="50" height="50" class="avatar" :src="commentsData['comments'][0]['avatar']" alt="">
				</div>

				<div class="comment-content">

					<div class="comment-info">
						<cite>{{commentsData['comments'][0]['commentAuthor']}}</cite>

						<div class="comment-meta">
							<time class="comment-time" :datetime="commentsData['comments'][0]['dateTime']">{{commentsData['comments'][0]['commentDate']}}</time>
							<span class="sep">/</span><a class="reply" href="#">Reply</a>
						</div>
					</div>

					<div class="comment-text">
						<p>{{commentsData['comments'][0]['commentText']}}</p>
					</div>

				</div>

			</li>

			<li class="thread-alt depth-1">

				<div class="avatar">
					<img width="50" height="50" class="avatar" :src="commentsData['comments'][1]['avatar']" alt="">
				</div>

				<div class="comment-content">

					<div class="comment-info">
						<cite>{{commentsData['comments'][1]['commentAuthor']}}</cite>

						<div class="comment-meta">
							<time class="comment-time" :datetime="commentsData['comments'][1]['dateTime']">{{commentsData['comments'][1]['commentDate']}}</time>
							<span class="sep">/</span><a class="reply" href="#">Reply</a>
						</div>
					</div>

					<div class="comment-text">
						<p>{{commentsData['comments'][1]['commentText']}}</p>
					</div>

				</div>

				<ul class="children">

					<li class="depth-2">

						<div class="avatar">
							<img width="50" height="50" class="avatar" :src="commentsData['comments'][2]['avatar']" alt="">
						</div>

						<div class="comment-content">

							<div class="comment-info">
								<cite>{{commentsData['comments'][2]['commentAuthor']}}</cite>

								<div class="comment-meta">
									<time class="comment-time" :datetime="commentsData['comments'][2]['dateTime']">{{commentsData['comments'][2]['commentDate']}}</time>
									<span class="sep">/</span><a class="reply" href="#">Reply</a>
								</div>
							</div>

							<div class="comment-text">
								<p>{{commentsData['comments'][2]['commentText']}}</p>
							</div>

						</div>

						<ul class="children">

							<li class="depth-3">

								<div class="avatar">
									<img width="50" height="50" class="avatar" :src="commentsData['comments'][3]['avatar']" alt="">
								</div>

								<div class="comment-content">

									<div class="comment-info">
										<cite>{{commentsData['comments'][3]['commentAuthor']}}</cite>

										<div class="comment-meta">
											<time class="comment-time" :datetime="commentsData['comments'][3]['dateTime']">{{commentsData['comments'][3]['commentDate']}}</time>
											<span class="sep">/</span><a class="reply" href="#">Reply</a>
										</div>
									</div>

									<div class="comment-text">
										<p>{{commentsData['comments'][3]['commentText']}}</p>
									</div>

								</div>

							</li>

						</ul>

					</li>

				</ul>

			</li>

			<li class="depth-1">

				<div class="avatar">
					<img width="50" height="50" class="avatar" :src="commentsData['comments'][4]['avatar']" alt="">
				</div>

				<div class="comment-content">

					<div class="comment-info">
						<cite>{{commentsData['comments'][4]['commentAuthor']}}</cite>

						<div class="comment-meta">
							<time class="comment-time" :datetime="commentsData['comments'][4]['dateTime']">{{commentsData['comments'][4]['commentDate']}}</time>
							<span class="sep">/</span><a class="reply" href="#">Reply</a>
						</div>
					</div>

					<div class="comment-text">
						<p>{{commentsData['comments'][4]['commentText']}}</p>
					</div>

				</div>

			</li>

		</ol>
		<!-- Commentlist End -->
	</div>
</template>

<script>
import commentsData from '../../data/commentsData'
export default {
  name: "commentList",
	data () {
		return {
			commentsData
		} 
	}
};
</script>