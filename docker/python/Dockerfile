# 参考 https://qiita.com/komiya_____/items/96c14485eb035701e218
FROM continuumio/anaconda3

RUN pip install --upgrade pip && \
    pip install autopep8 && \
    pip install Keras && \
    pip install tensorflow 

WORKDIR /app

EXPOSE 8888

ENTRYPOINT ["jupyter-lab", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root", "--NotebookApp.token=''"]

CMD ["--notebook-dir=/app"]
