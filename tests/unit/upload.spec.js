import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Upload from '@/components/upload/upload.vue'
import { mount } from '@vue/test-utils'
chai.use(sinonChai);

describe('Upload.vue', () => {
    it('upload 存在', () => {
        expect(Upload).to.be.ok
    })
});
